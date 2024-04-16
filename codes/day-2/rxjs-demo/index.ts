import { Observable, Observer, Subscription, filter, map, of, take, tap } from 'rxjs'
const getData = (): Observable<number[]> => {
    const data = [1, 2, 3, 4]
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(
    //         (resp) => {
    //             resp
    //                 .json()
    //                 .then(
    //                     (result) => {
    //                         of(result)
    //                     }
    //                 )
    //         }
    //     ).catch(
    //         (e) => { }
    //     )
    const dataObs: Observable<number[]> = of(data)
    return dataObs
}

// const observerOfGetData: Observer<number[]> = {
//     next: (data) => { console.log(data) },
//     error: (e) => { console.log(e) },
//     complete: () => { }
// }
let sub: Subscription =
    getData()
        .pipe(
            map(
                (data) => {
                    return data.map(
                        (num) => num * 2
                    )
                }
            ),
            filter(
                (data) => {
                    return data.length > 3
                }
            )
        )
        .subscribe({
            next: (data) => console.log(data),
            error: (e) => console.log(e)
        });
