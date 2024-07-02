import { Button } from "@/components/ui/button"
import { Ttodo } from "@/redux/features/todoSlice"
// import { useAppDispatch } from "@/redux/hook"
import EditModel from "./EditModel"
import { useUpdateTodoMutation } from "@/redux/api/api"

const TodoCard = ({ id, title, description, isCompleted, priority }: Ttodo) => {

    // const dispatch = useAppDispatch()
    const [udpateTodo, { data }] = useUpdateTodoMutation()

    const toggleState = () => {
        // dispatch(toggoleComplete(id))
        const taskData = {
            id, data: { title, description, isCompleted: !isCompleted, priority }
        }
        // console.log(taskData)

        udpateTodo(taskData)
    }
    return (
        <tr className="bg-white p-4 rounded-md border">
            <td className="py-2 text-center">
                <input type="checkbox" defaultChecked={isCompleted} onChange={toggleState} />
            </td>
            {/* <td className="py-2 text-center">
                <p className="font-semibold">{id}</p>
            </td> */}
            <td className="py-2 text-center">
                <p className="font-semibold">{title}</p>
            </td>
            <td>
                <div className="flex justify-center items-center gap-2">
                    <div className={`size-3 rounded-full  ${priority === "high" ? "bg-green-500" : priority === "medium" ? "bg-red-500" : "bg-black"}`}></div>
                    <p>{priority}</p>
                </div>
            </td>
            <td className="py-2 text-center">
                <div className="flex items-center justify-center gap-3 ">
                    {isCompleted ? <p className="text-green-500">Done</p> : <p className="text-red-500">Pending</p>}
                </div>
            </td>
            <td className="py-2 text-center max-w-[150px] font-medium font-sans">
                <p className="break-words">{description}</p>
            </td>
            <td className="py-2 text-center">
                <Button onClick={() => console.log("clicked")} className="bg-red-500 text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
                </Button>

            </td>
            <td className="py-2 text-center">
                <EditModel></EditModel>
            </td>
        </tr>
    )
}

export default TodoCard