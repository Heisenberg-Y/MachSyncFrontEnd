import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveWatcherComponent } from './active-watcher.component';

describe('ActiveWatcherComponent', () => {
  let component: ActiveWatcherComponent;
  let fixture: ComponentFixture<ActiveWatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveWatcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveWatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
