import Container from "@/components/ui/Container"
import TodoCard from "./TodoCard"
import AddtodoModel from "./AddtodoModel"
import TodoFilter from "./TodoFilter"

const TodoContainer = () => {
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
                        <TodoCard></TodoCard>
                        <TodoCard></TodoCard>
                        <TodoCard></TodoCard>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default TodoContainer