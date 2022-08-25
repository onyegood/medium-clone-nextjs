import Head from 'next/head'

interface Props {
  title?: string
}
const HeadComponent: React.FC<Props> = ({ title = 'Medium Clone' }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
export default HeadComponent;
