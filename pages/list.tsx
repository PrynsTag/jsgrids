import { GetStaticProps, NextPage } from "next"
import React from "react"
import Head from "next/head"
import { getLibraries, LibraryInfo } from "../lib/libraries"
import {
  Container,
  Heading,
  Link,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"

interface Props {
  items: LibraryInfo[]
}

const LinkTo = ({ href }: { href?: string }) =>
  href ? <Link href={href}>Link</Link> : <span />

const Page: NextPage<Props> = ({ items }) => (
  <Container maxW="full">
    <Head>
      <title>Library List</title>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <Heading>All Libraries</Heading>
    <Table size="sm">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>ID</Th>
          <Th>Source</Th>
          <Th>Home</Th>
          <Th>Demo</Th>
          <Th>NPM</Th>
          <Th>Bundlephobia</Th>
        </Tr>
      </Thead>
      <Tbody>
        {items.map((item) => (
          <Tr key={item.id}>
            <Td>{item.title}</Td>
            <Td>{item.id}</Td>
            <Td>
              <LinkTo href={item.github?.url} />
            </Td>
            <Td>
              <LinkTo href={item.homeUrl} />
            </Td>
            <Td>
              <LinkTo href={item.demoUrl} />
            </Td>
            <Td>
              <LinkTo href={item.npm?.url} />
            </Td>
            <Td>
              <LinkTo href={item.bundlephobia?.url} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Container>
)

export default Page

export const getStaticProps: GetStaticProps = async () => {
  return { props: { items: await getLibraries() } }
}
