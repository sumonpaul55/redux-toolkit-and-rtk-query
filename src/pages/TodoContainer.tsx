import Container from "@/components/ui/Container"
import TodoCard from "./TodoCard"
import AddtodoModel from "./AddtodoModel"
import TodoFilter from "./TodoFilter"
import { useGetTodosQuery } from "@/redux/api/api"
import { Ttodo } from "@/redux/features/todoSlice"
// import { useAppSelector } from "@/redux/hook"

const TodoContainer = () => {
    // const { todos } = useAppSelector(state => state.todos)
    // form server
    const { data: todos, isLoading, isError } = useGetTodosQuery(undefined)

    if (isLoading) {
        return <h1 className="mt-20 font-bold text-center">Loading...</h1>
    }
    if (isError) {
        return <h1 className="mt-20 font-bold text-center">
            There is an error</h1>
    }
    return (
        <Container>
            <h1 className="text-center font-bold text-xl font-serif">Redux Todo app with react</h1>
            <div>
                <div className="flex justify-between font-semibold text-xl mb-3">
                    <AddtodoModel></AddtodoModel>
                    <TodoFilter></TodoFilter>
                </div>
                <div className="rounded-xl bg-primary-gradient p-3">
                    <div className="p-3 bg-white rounded-md space-y-4  bg-opacity-80">
                        <table className="w-full space-y-2 py-2">
                            <thead>
                                <tr className="bg-white border p-4 text-center py-3">
                                    <th className="border text-center py-2">Check</th>
                                    {/* <th className="border text-center py-2">
                                        Task Id
                                    </th> */}
                                    <th className="border text-center py-2">
                                        Title
                                    </th>
                                    {/* <p>Time</p> */}
                                    <th className="border text-center py-2">
                                        Status
                                    </th>
                                    <th className="border text-center py-2">
                                        <p className="font-bold">Description</p>
                                    </th>
                                    <th className="border py-2 text-center">
                                        Remove
                                    </th>
                                    <th className="border py-2 text-center">
                                        Edit
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    todos?.data.map((items: Ttodo, idx: number) => (
                                        <TodoCard key={idx} id={items.id} title={items.title} description={items.description} isCompleted={items.isCompleted} ></TodoCard>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </Container>
    )
}

export default TodoContainer