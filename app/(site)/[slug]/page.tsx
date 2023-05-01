import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react";


type Props = {
  params: {slug:string}
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug)

  return (
    <div>
      <h1 className={`text-5xl m-1 font-extrabold bg-gradient-to-r bg-clip-text
              text-transparent from-fuchsia-600 to-amber-600 drop-shadow-2x`}
      >
        {page.title}
      </h1>

      <div className = {`text-lg text-gray-100 mt-10`}>
        <PortableText value={page.content}/>
      </div>
    </div>
  )
}
