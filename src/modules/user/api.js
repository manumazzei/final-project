import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, storage } from "../../../../firebase.config";

import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
  refFirebase,
  uploadBytes,
} from "firebase/storage";

const storage = getStorage();
const listRef = ref(storage);

// salvar um dado em images no firestore usando userId real de quem está logado e salvando uma url fixa(ex: 'teste')
// no dashboard, buscar os dados da imagem no firestore e usar a url para buscar a imagem no storage

// item é o dado do firestore
// getDownloadUrl(ref(storage, item.url))

// listar os dados de imagens do firestore que tem o userId do usuário logado
// pegar cada uma das imagens(reais) do storage utilizando o caminho dos dados de imagem do firestore

//

export const listProjects = async () => {
  try {
    const res = await listAll(listRef);
    const items = await Promise.all(
      res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        const data = await getMetadata(itemRef);
        return { ...data, url };
      })
    );
    return items;
  } catch (error) {
    console.log(error);
  }
};

/* CRIA REGISTRO NO FIRESTORE E NO STORAGE */

export async function createItem(payload, image) {
  const docRef = await addDoc(collection(db, "items"), payload);

  const imageRef = refFirebase(storage, `${docRef.id}/${image.name}`);

  uploadBytes(imageRef, image);

  return docRef;
}
