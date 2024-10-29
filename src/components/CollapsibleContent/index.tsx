import Collapse from "./CollapsibleContent"

const CollapsibleContentMain = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 my-14">
      <Collapse collapsed={true}>
        <h1 className="text-xl font-bold">This is a collapse</h1>
        <p className="mt-2 text-gray-700">Hello world!</p>
      </Collapse>
    </section>
  )
}

export default CollapsibleContentMain