import {collection} from 'firebase/firestore'
import {db} from '../Firebase/firebaseConfig'

export const collectionRef = collection(db,'movieList01')


