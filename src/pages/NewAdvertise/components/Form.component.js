import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Select from "react-select";
import {citiesData} from "data/data";
import {ApartmantInputComponent} from "./apartmantInput.component";
import {HouseInputComponent} from "./houseInput.component";
import {useNavigate} from "react-router-dom";
// import Map , {Marker , GeolocateControl} from 'react-map-gl';
import MapPicker from "react-google-map-picker";

import {GET_STATE, NEW_ADD} from "redux/slices/state.slice";


const DefaultLocation = {lat: 32.4279, lng: 53.6880};
const DefaultZoom = 15;

function FormComponent({children}) {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [imageURLs, setImageURLs] = useState([])
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
    const [city , setCity] = useState('')
    const [showMap , setShowMap] = useState(false)
    console.log(defaultLocation)
    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);

    // console.log(location)

    function handleChangeLocation(lat, lng) {
        setLocation({lat: lat, lng: lng});
    }

    function handleChangeZoom(newZoom) {
        setZoom(newZoom);
    }

    const cityArr = Object.values(citiesData).flat()
    const formName = useSelector(state => state.statesState.formName)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cityOption = cityArr.map(item => {
        return {
            value: item,
            label: item
        }
    })



    useEffect(() => {

        if (selectedFiles.length < 1) return;
        const newImageUrls = []
        Object.values(selectedFiles).forEach(image => newImageUrls.push(URL.createObjectURL(image)))
        setImageURLs(newImageUrls)

    }, [selectedFiles])


    const handleUploadImage = (e) => {

        setSelectedFiles(e.target.files)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.target);
        data.images = imageURLs;
        const properties = {
            pish: data.get("pish"),
            ejare: data.get("ejare"),
            city: data.get("city"),
            ad: data.get("ad"),
            meter: data.get("meter"),
            meterground: data.get("meterground"),
            tamdid: data.get("tamdid"),
            family: data.get("family"),
            room: data.get("room"),
            floor: data.get("floor"),
            elevator: data.get("elevator"),
            parking: data.get("parking"),
            warehouse: data.get("warehouse"),
            balcon: data.get("balcon"),
            lat: location.lat,
            lng: location.lng

        }
        console.log(properties)
        dispatch(NEW_ADD(
            data.get("title"),
            data.get("phone"),
            data.get("description"),
            properties,
            imageURLs))

        navigate("/show")
    }

    const handleCityName = (e)=>{
        setShowMap(true)
        fetch(`https://iran-locations-api.vercel.app/api/v1/cities?state=${e.value}`)
            .then(response => response.json())
            .then(json => setDefaultLocation({
                lat : +json.latitude ,
                lng: +json.longitude
            }))

    }

    return (
        <form className='mb-14' onSubmit={handleSubmit}>
            <h2 className='text-xl font-medium'>ثبت آگهی </h2>
            <div className='mt-8 w-full py-10 border border-gray-300 rounded flex justify-between items-center px-4 '>
                <span className='text-gray-700'>{formName}</span>
                <button className='text-red-700 font-medium p-2 hover:bg-red-50 rounded  transition-colors'
                        onClick={() => dispatch(GET_STATE())}>تغییر دسته
                    بندی
                </button>
            </div>

            <div className='mt-8'>
                <h3 className="text-lg">شهر</h3>
                <Select
                    className="basic-single mt-4"
                    classNamePrefix="select"
                    isClearable={true}
                    isRtl={true}
                    isSearchable={true}
                    options={cityOption}
                    name="city"
                    onChange={handleCityName}
                />
            </div>

            <div className=' mt-8'>


                {
                    showMap ? <MapPicker
                        defaultLocation={defaultLocation}
                        zoom={zoom}
                        style={{height: "400px"}}
                        onChangeLocation={handleChangeLocation}
                        onChangeZoom={handleChangeZoom}
                        apiKey="AIzaSyAkBhTU6Tc8FNdu64ZRG4rPm2bin7H7OOI"
                    /> : ""
                }


            </div>


            <div className='mt-8'>
                <h3 className="text-lg">عکس آگهی</h3>
                <p className='text-sm mt-2 text-gray-500'>عکس‌هایی از فضای داخل و بیرون ملک اضافه کنید. آگهی‌های دارای
                    عکس تا «۳ برابر» بیشتر توسط کاربران دیده می‌شوند.</p>
                <div className='flex flex-wrap gap-x-4 mt-5'>
                    <label htmlFor="images"
                           className=' rounded-lg cursor-pointer w-28 h-28  inline-block border-2 flex justify-center items-center border-dashed border-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-white" fill="red"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </label>
                    <input id='images' onChange={handleUploadImage} multiple className='opacity-0 absolute -z-10'
                           type="file"/>
                    {imageURLs.map(imageSrc => <img className=' w-28 h-28 rounded-lg object-cover mb-2'
                                                    src={imageSrc}/>)}
                </div>
            </div>

            <div className='mt-8'>
                <h3 className="text-lg">آگهی دهنده</h3>
                <div className='flex  items-center gap-x-8 mt-4 mr-2'>
                    <div className='flex items-center'>
                        <input
                            className='ml-4 bg-red-500 accent-amber-800 w-5 h-5 cursor-pointer  stroke stroke-2 stroke-red-500'
                            value='شخصی' type="radio" name="ad" id="personal"/>
                        <label htmlFor="personal">شخصی</label>
                    </div>
                    <div className='flex items-center'>

                        <input className='ml-4 bg-red-500 accent-amber-800 w-5 h-5 cursor-pointer' value='مشاور املاک'
                               type="radio" name="ad" id="estate"/>
                        <label htmlFor="estate">مشاور املاک</label>
                    </div>
                </div>
            </div>

            {
                formName === 'آپارتمان' ? <ApartmantInputComponent/> : formName === 'خانه و ویلا' ?
                    <HouseInputComponent/> : ""
            }

            <div className='mt-12'>
                <h3 className="text-lg">شماره موبایل</h3>
                <p className='mt-2 text-gray-500 text-sm'>کد تأیید به شمارهٔ موبایل شما ارسال خواهد شد. تماس و چت نیز
                    با این شماره انجام می‌شود.</p>
                <p className='mt-2 text-gray-500 text-sm'>توجه: لطفاً پس از ثبت آگهی، به پیامک‌های پرداخت وجه بی‌اعتنا
                    باشید.</p>

                <input
                    className='mt-4 w-full border-2 border-gray-300 p-2 rounded outline-0 focus:border-2 focus:border-red-400'
                    type="text" placeholder='شماره موبایل شما (**** *** 0911)' name="phone" id=""/>
            </div>

            <div className='mt-8'>
                <h3 className="text-lg">عنوان آگهی</h3>
                <p className='mt-2 text-gray-500 text-sm'>در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره
                    کنید.</p>

                <input
                    className='mt-4 w-full border-2 border-gray-300 p-2 rounded outline-0 focus:border-2 focus:border-red-400'
                    type="text" placeholder='مثال آپارتمان 0 متر ، ولیعصر' name="title" id=""/>

            </div>


            <div className='mt-8'>
                <h3 className="text-lg">توضیحات آگهی</h3>
                <p className='mt-2 text-gray-500 text-sm'>در توضیحات آگهی به مواردی مانند شرایط اجاره، جزئیات و
                    ویژگی‌های قابل توجه، دسترسی‌های محلی و موقعیت قرارگیری ملک اشاره کنید.</p>
                <textarea
                    className='mt-4 w-full border-2 border-gray-300 p-2 h-24 rounded outline-0 focus:border-2 focus:border-red-400'
                    name="description" placeholder="توضیحات خود را بنویسید."/>
            </div>

            <div className='mt-8 flex justify-end gap-x-8'>
                <button className='border border-gray-400 py-1 px-2 w-32  rounded hover:bg-gray-100'
                        onClick={() => dispatch(GET_STATE())}>انصراف
                </button>
                <button type='submit'
                        className='border bg-red-600 text-white py-1 px-2 w-32 h-10  rounded hover:bg-red-500'>ارسال
                    آگهی
                </button>
            </div>
        </form>
    );
}

export {FormComponent};