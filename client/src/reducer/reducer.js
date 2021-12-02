import { AlertTitle } from '@chakra-ui/alert';
import { SAVE_LETTER} from './actions';

const initialState = {
    name: '',
    address: '',
    email: '',
    phone: '',
    letter_title:'',
    letter_content:''

}

const reducer = (state=initialState, action)=>{
    switch(action.type){

        case SAVE_LETTER:{
            return{
                ...state,
                letter_title:action.title,
                letter_content:action.content

            }
        }
        
        default:
            return state;
    }
}

export default reducer;