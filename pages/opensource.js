import Layout from "../components/Layout";
import OpenSourceCard from "../components/OpenSourceCard";

const repos = [
  {
    id: 1, title: 'frvs/guidelines', description: 'Um guia aos conceitos básicos da programação e desenvolvimento. `must-read` para iniciantes na área.', url: 'https://github.com/frvs/guidelines'
  }, 
  {
    id: 2, title: 'frvs/minimalddd_dotnetcore', description: 'Um simples boilerplate de uma API em C# utilizando conceitos do Domain Driven Design.', url: 'https://github.com/frvs/MinimalDDD_DotNetCore'
  }
]

export default function OpenSource() {
  return (
    <Layout>
      {
        repos.map((item, i) => {
          return (
            <OpenSourceCard key={item.id} {...item} />
          )
        })
      }
    </Layout>
  )
}