import sessionStorageIncrement from './SessionStorageIncrement'

export default function CounterHooks() {

    const [counter,setCounter] = sessionStorageIncrement("my-button-increment",0);

    const handleCountIncrement = () => {
        setCounter(counter+1);
    }
    return (
        <div>
            <button onClick={handleCountIncrement}>{counter}</button>
        </div>
    )
}
