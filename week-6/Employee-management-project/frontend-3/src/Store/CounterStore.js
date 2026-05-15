import {create} from 'zustand';

// store setup
export const useCounterStore = create((set) => ({
	// data
	newCounter: 500,
	newCounter1:100,
	user:{name:"ravi",email:"ravi@gmail.com",age:21},
	changeEmail:()=>set((state)=>({user:{...state.user,email:"test@gmail.com"}})),
	changeNameAndAge:()=>set((state)=>({user:{...state.user,name:"test",age:30}})),
	
	incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
	incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
	decrementCounter:()=>set(state=>({newCounter:state.newCounter-20})),
	reset:()=>set(({newCounter:0}))

}))