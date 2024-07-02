import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAddTodoMutation } from "@/redux/api/api"
// import { addTodo } from "@/redux/features/todoSlice"
// import { useAppDispatch } from "@/redux/hook"
import { DialogClose } from "@radix-ui/react-dialog"
import { FormEvent, useState } from "react"

const AddtodoModel = () => {
    const [task, setTask] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    // for server
    const [addTodo, { data, isError, isLoading, isSuccess }] = useAddTodoMutation()



    // const dispatch = useAppDispatch()
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        // const randomId = Math.random().toString(20).substring(2, 8)

        // for local state manager
        // dispatch(addTodo(tastDetails))


        console.log(data, isError, isSuccess, isLoading)

        const tastDetails = {
            title: task, description, priority, isCompleted: false
        }
        addTodo(tastDetails)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary-gradient">Add Todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Add a task for you.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Title
                        </Label>
                        <Input
                            id="name"
                            // defaultValue="Pedro Duarte"
                            className="col-span-3"
                            onBlur={(e) => setTask(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Description
                        </Label>
                        <Input
                            id="username"
                            // defaultValue="@peduarte"
                            className="col-span-3"
                            onBlur={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="priority" className="text-right">
                            Priority
                        </Label>
                        <Select onValueChange={(v) => setPriority(v)} >
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select Priority" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="high">High</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="low">Low</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <DialogClose asChild>
                        <div className="flex justify-end">
                            <Button type="submit">Add Task</Button>
                        </div>
                    </DialogClose>
                </form>

            </DialogContent>
        </Dialog >
    )

}

export default AddtodoModel