import React from "react";
import { useState, useCallback, useEffect, useRef} from "react";

function Length(){
    const [length, setLength] = useState(8)
    const [num, setNum] = useState(false)
    const [char, setChar] = useState(false) 
    const [password, setPassword] = useState("") 

    const passwordRef = useRef(null)


    const passwordGenerator = useCallback(() =>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(num) str += "0123456789"
        if(char) str += "!@#$%^&*-_+={}[]?/|~`"

        for(let i = 1; i <= length; i++){
            let charIndex = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(charIndex)
        }
        setPassword(pass)
    }, [length, num, char, setPassword])

    useEffect(() => {
        passwordGenerator()
    }, [length, num, char, passwordGenerator])

    const copyPasswordOnClick = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 20);
        window.navigator.clipboard.writeText(password)
    }, [password])


    return(
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black-500 bg-gray-500">
                <h1 className="text-white text-center my-3">Password Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"   
                        value={password}
                        className=" outline-none w-full py-1 px-3"
                        placeholder="Password"
                        readOnly
                        ref={passwordRef}
                    />
                    <button 
                    onClick={copyPasswordOnClick}
                    className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
                </div>
                <div className=" flex text-sm gap-x-2">
                    <div className=" flex items-center gap-x-1">
                        <input
                            type="range"
                            min={5}
                            max={20}
                            value={length}
                            className=" cursor-pointer"
                            onChange={(e) => {setLength(e.target.value)}}
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className=" flex items-center gap-x-1">
                        <input 
                            type="checkbox"
                            defaultChecked = {num}
                            id="numberInput"
                            onChange={() => {
                                setNum((prev) => !prev)
                            }}
                        />
                        <label htmlFor="numberInput">Number</label>
                    </div>
                    <div className=" flex items-center gap-x-1">
                        <input 
                            type="checkbox"
                            defaultChecked = {char}
                            id="charInput"
                            onChange={() => {
                                setChar((prev) => !prev)
                            }}
                        />
                        <label htmlFor="charInput">Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Length