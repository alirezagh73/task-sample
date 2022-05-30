import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {SliderComponent} from "./components/slider.component";
import MapPicker from "react-google-map-picker";


const DefaultZoom = 15;

function ShowAdPage(props) {

    const newAdd = useSelector(state => state.statesState.showAd)
    const formName = useSelector(state => state.statesState.formName)

    const DefaultLocation = {lat: newAdd.properties.lat, lng: newAdd.properties.lng};
    const [zoom, setZoom] = useState(DefaultZoom);

    console.log(newAdd)

    return (
        <div className="container xl:max-w-screen-lg">
            <h2 className='mt-8 text-lg font-medium'>مدیریت آگهی</h2>

            <div className='text-center mt-6 border-b-2 border-gray-300'>
                <span className='text-center inline-block py-2 px-2 font-medium text-red-700 border-b-2 border-red-700'>پیش نمایش آگهی</span>
            </div>

            <div className='grid grid-cols-2 gap-x-10'>
                <div className='p-3 '>
                    <h2 className='text-lg font-medium'>{newAdd.title}</h2>
                    <p className='text-medium mt-2 text-gray-500'> شهر {newAdd.properties.city} | {formName} </p>

                    <div className=' mt-4'>
                        <div className='flex items-center justify-between border-b border-gray-300 pb-4'>
                            <p className='text-gray-500'>شماره موبایل</p>
                            <p className='text-red-600'>{newAdd.phone}</p>
                        </div>
                        <div className='flex items-center justify-between mt-3 border-b border-gray-300 pb-4'>
                            <p className='text-gray-500'>محل</p>
                            <p className=''>{newAdd.properties.city}</p>
                        </div>
                        <div className='flex items-center justify-between mt-3 border-b border-gray-300 pb-4'>
                            <p className='text-gray-500'>متراژ</p>
                            <p className=''>{newAdd.properties.meter}</p>
                        </div>

                        <div className='flex items-center justify-between mt-3 border-b border-gray-300 pb-4'>
                            <p className='text-gray-500'>تعداد اتاق </p>
                            <p className=''>{newAdd.properties.room == 0 ? " بدون اتاق" : newAdd.properties.room}</p>
                        </div>

                        <div className='flex items-center justify-between mt-3 border-b border-gray-300 pb-4'>
                            <p className='text-gray-500'>ودیعه</p>
                            <p className=''>{newAdd.properties.pish}</p>
                        </div>

                        <div className='flex items-center justify-between mt-3 border-b border-gray-300 pb-4'>
                            <p className='text-gray-500'>ودیعه و اجاره</p>
                            <p className=''>{newAdd.properties.tamdid === " yes" ? "قابل تمدید" : "غیر قابل تمدید"}</p>
                        </div>

                        <div className='flex items-center justify-between mt-3 border-b border-gray-300 pb-4'>
                            <p className='text-gray-500'>مناسب برای</p>
                            <p className=''>{newAdd.properties.family === "yes" ? "خانواده" : "مجرد و خانواده"}</p>
                        </div>

                        <div className='flex items-center justify-between mt-3 border-b border-gray-300 pb-4'>
                            <p className='text-gray-500'>آگهی دهنده</p>
                            <p className=''>{newAdd.properties.ad}</p>
                        </div>

                        <div className='flex items-center justify-between mt-3 border-b border-gray-300 pb-4'>
                            <p className='text-gray-500'> پارکینگ</p>
                            <p className=''>{newAdd.properties.parking === "yes" ? "دارد" : "ندارد"}</p>
                        </div>

                        <div className='flex items-center justify-between mt-3 border-b border-gray-300 pb-4'>
                            <p className='text-gray-500'> انباری</p>
                            <p className=''>{newAdd.properties.warehouse === "yes" ? "دارد" : "ندارد"}</p>
                        </div>

                        <div className='flex items-center justify-between mt-3 border-b border-gray-300 pb-4'>
                            <p className='text-gray-500'> بالکن</p>
                            <p className=''>{newAdd.properties.balcon === "yes" ? "دارد" : "ندارد"}</p>
                        </div>
                        <div className='flex items-center justify-between mt-3 border-b border-gray-300 pb-4'>
                            <p className='text-gray-500'> اجاره ماهانه</p>
                            <p className=''>{newAdd.properties.ejare} تومان</p>
                        </div>
                    </div>


                    <div className='mt-8'>
                        <h3 className='mb-4 text-lg font-medium'>توضیحات</h3>
                        <p>{newAdd.description}</p>
                    </div>
                </div>


                <div className='h-96 my-6 '>

                    <SliderComponent images={newAdd.images}/>

                    <MapPicker
                        defaultLocation={DefaultLocation}
                        zoom={zoom}
                        style={{height: "400px" , margin : "16px 0 16px  0"}}
                        // onChangeLocation={handleChangeLocation}
                        // onChangeZoom={handleChangeZoom}
                        apiKey="AIzaSyAkBhTU6Tc8FNdu64ZRG4rPm2bin7H7OOI"
                    />

                </div>
            </div>
        </div>
    );
}

export {ShowAdPage};