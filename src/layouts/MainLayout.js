import SmoothScroll from "../components/SmoothScroll"

const MainLayout = ({ children }) => {
    return (
        <SmoothScroll>
            { children }
        </SmoothScroll>
    )
}

export default MainLayout