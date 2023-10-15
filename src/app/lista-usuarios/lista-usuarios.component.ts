import { Component, Input} from '@angular/core';
import { User } from '../user.model'; 

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
  @Input() usuarios: User[] = [];
  

}