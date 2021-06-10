import Head from 'next/head'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import SafeEnviroment from 'ui/components/feedback/SafeEnviroment/SafeEnviroment'

export default function Home() {
  return (
    <div>
      <SafeEnviroment/>
      <PageTitle title={'Conheça os profissionais'}/>
    </div>
  )
}
