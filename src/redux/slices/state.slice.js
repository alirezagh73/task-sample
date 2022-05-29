import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    entities: {
        1: {
            id: 1,
            name: "اجاره مسکونی",
            subState: ["آپارتمان", "خانه و ویلا", "متفرقه"]
        },
        2: {
            id: 2,
            name: "فروش مسکونی",
            subState: ["آپارتمان", "زمین و کلنگی", "خانه و ویلا", "متفرقه"]
        },
        3: {
            id: 3,
            name: " فروش اداری و تجاری",
            subState: ["دفتر کار، اتاق اداری و مطب", "مغازه و غرفه", "صنعتی، کشاورزی و تجاری", "متفرقه"]
        },
        4: {
            id: 4,
            name: "اجاره اداری و تجاری",
            subState: ["دفتر کار، اتاق اداری و مطب", "مغازه و غرفه", "صنعتی، کشاورزی و تجاری", "متفرقه"]
        },
        5: {
            id: 5,
            name: "اجاره کوتاه مدت",
            subState: ["آپارتمان و سوئیت", "ویلا و باغ", "دفتر کار و فضای آموزشی", "متفرقه"]
        },
        6: {
            id: 6,
            name: "پرو‌ژه‌های ساخت و ساز",
            subState: ["مشارکت در ساخت", "پیش‌فروش", "متفرقه"]
        }
    }
    ,

    showCase: {
        value: [],
        id: null
    },
    status: "All",
    form: false,
    formName: '',

    showAd: {
        title: '',
        phone: null,
        properties: [],
        description: '',
        images: []
    }
}

const stateSlice = createSlice({
    name: "STATE",
    initialState,
    reducers: {
        GET_STATE(state, action) {
            state.showCase.value = Object.values(state.entities).map(item => item.name)
            state.status = "All"
            state.form = false
        },
        GET_SUB_STATE(state, action) {
            const id = action.payload
            state.showCase.value = state.entities[id].subState
            state.showCase.id = id
            state.form = false
            state.status = "Sub"
        },
        FORM_CREATE(state, action) {
            state.formName = action.payload
            state.form = true
        },

        NEW_ADD: {
            reducer: (state, action) => {
                const {phone, title, description, properties, images} = action.payload;
                console.log(action.payload)
                state.showAd.title = title;
                state.showAd.phone = phone;
                state.showAd.description = description;
                state.showAd.properties = properties;
                state.showAd.images = images


            },
            prepare: (title, phone, description, properties, images) => {
                return {
                    payload: {
                        title,
                        phone,
                        description,
                        properties,
                        images
                    }
                }
            }
        }


    }
})

export const {
    GET_SUB_STATE,
    GET_STATE,
    FORM_CREATE,
    NEW_ADD
} = stateSlice.actions

export default stateSlice.reducer