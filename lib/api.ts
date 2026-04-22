import axios from "axios";
import type { Note, NewNote} from "../types/note";


axios.defaults.baseURL = "https://notehub-public.goit.study/api";

axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`;


interface FetchNotesResponce {
    notes: Note[];
    totalPages: number;
}

export const fetchNotes = async (query: string, page: number): Promise<FetchNotesResponce> => {
const response = await axios.get<FetchNotesResponce>('/notes', {
    params: { search: query, 
        page: page},
});
return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await axios.get<Note>(`/notes/${id}`);
  return response.data;
};

export const createNote = async (newNote: NewNote): Promise<Note> => {
const response = await axios.post<Note>('/notes', newNote);
return response.data;
};


export const deleteNote = async (noteId: string): Promise<Note>  => {
const response = await axios.delete<Note>(`/notes/${noteId}`);
return response.data;
}