import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherInputComponent } from './watcher-input.component';

describe('WatcherInputComponent', () => {
  let component: WatcherInputComponent;
  let fixture: ComponentFixture<WatcherInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatcherInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatcherInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
