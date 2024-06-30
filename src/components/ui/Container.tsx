import { ReactNode } from "react"

type TContainer = {
    children: ReactNode
}
const Container = ({ children }: TContainer) => {
    return (
        <section className="py-10">
            <div className="container mx-auto">
                {children}
            </div>
        </section>
    )
}

export default Container 