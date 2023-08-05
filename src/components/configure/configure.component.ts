import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-configure',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss'],
})
export class ConfigureComponent {
  playerControls: FormControl[] = [new FormControl(), new FormControl()];
  maxPlayers = 7;

  handleAddNewPlayer(): void {
    this.playerControls.push(new FormControl());
  }

  handleRemovePlayer(index: number): void {
    this.playerControls.splice(index, 1);
  }

  handleStart(): void {
    // TODO
  }

}
