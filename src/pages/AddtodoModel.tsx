import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addTodo } from "@/redux/features/todoSlice"
import { useAppDispatch } from "@/redux/hook"
import { DialogClose } from "@radix-ui/react-dialog"
import { FormEvent, useState } from "react"

const AddtodoModel = () => {
    const [task, setTask] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useAppDispatch()
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const randomId = Math.random().toString(20).substring(2, 8)
        const tastDetails = {
            id: randomId, title: task, description
        }
        dispatch(addTodo(tastDetails))
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
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="submit">Add Task</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>

            </DialogContent>
        </Dialog >
    )

}

export default AddtodoModel