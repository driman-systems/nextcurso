import Designer from "@/components/admin/dashboard/designer/designer";

const PageDesigner = async({params}: {params: {id: string }}) => {

    const { id } = params;

  return (
    <Designer page={id} />
  )
}

export default PageDesigner