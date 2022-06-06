import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.scss']
})
export class SynopsisComponent implements OnInit {

  constructor(
    /* instead of input we use inject to display the details */
    @Inject(MAT_DIALOG_DATA)
    public data: { Title: string, Description: string }
  ) { }

  ngOnInit(): void {
  }

}