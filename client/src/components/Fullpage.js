import React,{useRef, useEffect} from 'react';
import './Fullpage.css'
import { Button} from '@chakra-ui/react';
import {useNavigate}from 'react-router';
import WithBackgroundImage from './WithBackgroundImage';

const DIVIDER_HEIGHT = 5;


function Fullpage(){
    const outerDivRef = useRef();
    const navigate = useNavigate();


    useEffect(()=>{
        const wheelHandler = (e) =>{
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current;
            const pageHeight = window.innerHeight;

            if (deltaY > 0){
                //현재 1페이지면
                if (scrollTop >= 0 && scrollTop < pageHeight){
                    console.log('현재 1페이지, down');
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left:0,
                        behavior:"smooth"
                    });
                }
                //현재 2페이지면
                else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2){
                    console.log('현재 2페이지, down');
                    outerDivRef.current.scrollTo({
                        top:pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left:0,
                        behavior: 'smooth'
                    });
                }
                else{
                    //현재 3페이지면
                    console.log('현재 3페이지, down');
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left:0,
                        behavior: 'smooth'
                    });
                }
            }
            else{
                //스크롤 올릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight){
                    //현재 1페이지
                    console.log('현재 1페이지, up')
                    outerDivRef.current.scrollTo({
                        top:0,
                        left:0,
                        behavior:'smooth'
                    });
                }
                //현재 2페이지
                else if ( scrollTop >= pageHeight && scrollTop < pageHeight * 2){
                    console.log('현재 2페이지, up');
                    outerDivRef.current.scrollTo({
                        top:0,
                        left:0,
                        behavior:"smooth"
                    });
                }
                else{
                    //현재 3페이지
                    console.log('현재 3페이지, up');
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left:0,
                        behavior: 'smooth'
                    });

                }
            }
        };

        const outerDiveRefCurrent = outerDivRef.current;
        outerDiveRefCurrent.addEventListener('wheel',wheelHandler);
        return ()=>{
            outerDiveRefCurrent.removeEventListener('wheel',wheelHandler);
        };
    },[]);


    return(
        <div ref={outerDivRef} className='outer'>
            <div className='inner be-yellow'>  
                <WithBackgroundImage buttonName={'About us'}/> 
                
            </div>
            <div className='divider'></div>
            <div className='inner bg-blue'>
                <WithBackgroundImage buttonName={'시집 만들러'}/>
                
            </div>
            <div className='divider'></div>
            <div className='inner bg-pink'>
                <WithBackgroundImage buttonName={'문의 하기'}/>
            
            </div>

        </div>
    );
}

export default Fullpage;