import React ,{useState , useEffect} from 'react'

function HooksMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e)=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        window.addEventListener("mousemove",logMousePosition)

        return ()=>{
            console.log("component unmount code")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    return (
        <div>
            Hooks X - {x}  Y - {y}
        </div>
    )
}

export default HooksMouse
