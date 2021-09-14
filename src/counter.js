import {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';
import sacredImage from './images/sacred.png';
import voidSImage from './images/voidS.png';
import ancientImage from './images/ancient.png';
import styles from './counter.module.css';

export default function Counter() {
    const [sacred, setSacred] = useState(() => JSON.parse(window.localStorage.getItem('sacred')) ?? 0);
    const [voidS, setVoid] = useState(() => JSON.parse(window.localStorage.getItem('voidS')) ?? 0);
    const [ancient, setAncient] = useState(() => JSON.parse(window.localStorage.getItem('ancient')) ?? 0);

    const shardCountIncrease = (type) => {
        switch (type) {
            case 'sacred':
                setSacred(prevState => prevState + 1);
                console.log(setSacred)
                break
            case 'voidS':
                setVoid(prevState => prevState + 1);
                console.log(setVoid)
                break
            case 'ancient':
                setAncient(prevState => prevState + 1);
                console.log(setAncient)
                break
            default:
                return
        }
    };

        const shardCountDecrease = (type) => {
        switch (type) {
            case 'sacred':
                setSacred(prevState => prevState - 1);
                console.log(setSacred)
                break
            case 'voidS':
                setVoid(prevState => prevState - 1);
                console.log(setVoid)
                break
            case 'ancient':
                setAncient(prevState => prevState - 1);
                console.log(setAncient)
                break
            default:
                return
        }
    };
    useEffect(() => {
        window.localStorage.setItem('sacred', JSON.stringify(sacred))
    }, [sacred]);

    useEffect(() => {
        window.localStorage.setItem('voidS', JSON.stringify(voidS))
    }, [voidS]);

    useEffect(() => {
        window.localStorage.setItem('ancient', JSON.stringify(ancient))
    }, [ancient]);


    return (
        <div>
            <div>
                <img src={sacredImage} alt="" width="200"/>
                <div>
                    <span className={styles.shardSpan}>{sacred}</span>
                    <button type="button" onClick={()=>shardCountIncrease('sacred')}>Plus</button>
                    <button type="button" onClick={()=>shardCountDecrease('sacred')}>Minus</button>
                    <button type="button" onClick={()=>setSacred(0)}>Reset</button>
                </div>
            </div>
            <div>
                <img src={voidSImage} alt="" width="200"/>
                <div>
                    <span className={styles.shardSpan}>{voidS}</span>
                    <button type="button" onClick={()=>shardCountIncrease('voidS')}>Plus</button>
                    <button type="button" onClick={()=>shardCountDecrease('voidS')}>Minus</button>
                    <button type="button" onClick={()=>setVoid(0)}>Reset</button>
                </div>
            </div>
            <div>
                <img src={ancientImage} alt="" width="200"/>
                <div>
                    <span className={styles.shardSpan}>{ancient}</span>
                    <button type="button" onClick={()=>shardCountIncrease('ancient')}>Plus</button>
                    <button type="button" onClick={()=>shardCountDecrease('ancient')}>Minus</button>
                    <button type="button" onClick={()=>setAncient(0)}>Reset</button>
                </div>
            </div>
        </div>
    )
};