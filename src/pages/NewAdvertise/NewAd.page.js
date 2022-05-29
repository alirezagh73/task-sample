import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FORM_CREATE, GET_STATE, GET_SUB_STATE} from "redux/slices/state.slice";
import {RecordComponent} from "./components/record.component";
import {FormComponent} from "./components/Form.component";

const NewAdPage = () => {
    const statesState = useSelector(state => state.statesState.showCase)
    const statusState = useSelector(state => state.statesState.status)
    const formState = useSelector(state =>state.statesState.form)
    const dispatch = useDispatch()
    useEffect(()=>{

        dispatch(GET_STATE())

    },[])


    const handleClick = (id)=>{
        dispatch(GET_SUB_STATE(id))
    }



    return (
        <div className="container xl:max-w-screen-xl">
            <div className="max-w-lg  m-auto flex flex-col mt-28">
                {
                   formState ?
                       <>
                        <FormComponent />
                       </> :
                       <>
                           <div className="mb-10">
                               <h3 className='text-lg font-medium'>زیر دسته های املاک</h3>
                               <span className="mt-2 text-sm text-gray-500">انتخاب دسته بندی</span>
                           </div>

                           <RecordComponent  status={statusState} handleClick={handleClick} showCase={statesState.value}/>

                       </>
                }
            </div>


        </div>


    );
};

export {NewAdPage};