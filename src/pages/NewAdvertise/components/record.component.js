import React from 'react';
import {useDispatch} from "react-redux";
import {FORM_CREATE, GET_STATE} from "../../../redux/slices/state.slice";

function RecordComponent({showCase, handleClick , status}) {
    const dispatch = useDispatch()

    const handleFormChange = (value)=>{
        console.log(value)
        dispatch(FORM_CREATE(value))
    }
    return (
        <>
            {
                status === "Sub" ?
                    <p className='flex items-center pb-4 cursor-pointer' onClick={() => dispatch(GET_STATE())}>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-1" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                        <span className='mr-4'>بازگشت به همهء املاک</span>
                    </p> : ''
            }
            <ul>
                {
                   status === "All" ?
                       showCase.map((item, index) => {
                           return (
                               <li className="flex justify-between items-center cursor-pointer border-t border-b py-4 pl-1"
                                   onClick={() => handleClick(index + 1)}
                               >

                          <span>
                            {item}
                          </span>


                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                                   </svg>
                               </li>
                           )
                       }) :
                       showCase.map((item, index) => {
                           return (
                               <li className="flex justify-between items-center cursor-pointer border-t border-b py-4 pl-1"
                                onClick={(e)=>(handleFormChange(e.currentTarget.firstChild.innerHTML))}
                               >

                          <span>
                            {item}
                          </span>


                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                                   </svg>
                               </li>
                           )
                       })
                }
            </ul>
        </>
    );
}

export {RecordComponent};