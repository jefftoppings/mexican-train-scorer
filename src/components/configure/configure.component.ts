import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-configure',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss'],
})
export class ConfigureComponent {
  playerControls: FormControl[] = [
    new FormControl('', [Validators.required]),
    new FormControl('', [Validators.required]),
  ];
  maxPlayers = 7;
  startingRoundControl: FormControl = new FormControl(13);

  constructor() {}

  handleAddNewPlayer(): void {
    this.playerControls.push(new FormControl('', [Validators.required]));
  }

  handleRemovePlayer(index: number): void {
    this.playerControls.splice(index, 1);
  }

  handleStart(): void {
    // TODO
    const formGroup: UntypedFormGroup = new UntypedFormGroup({});
    this.playerControls.forEach((control, i) =>
      formGroup.addControl(`player${i + 1}`, control)
    );
    if (formGroup.invalid) {
      alert('Please make sure all players have a name set');
    }
    console.log(formGroup);
    ``;
  }
}
