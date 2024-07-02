import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"


const EditModel = () => {
    const [task, setTask] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const onSubmit = () => {
        console.log(task, description, priority)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-[#5c53fe] text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Edit Your assigned Task
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

export default EditModel