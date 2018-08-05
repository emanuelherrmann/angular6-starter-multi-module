import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '../../../node_modules/@angular/core';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { By } from '../../../node_modules/@angular/platform-browser';
import { TesteableComponent } from './testeable.component';

describe('TesteableComponent', () => {
  let component: TesteableComponent;
  let fixture: ComponentFixture<TesteableComponent>;

  let messageEl: DebugElement;
  let ch1El : DebugElement,ch2El : DebugElement,ch3El : DebugElement,ch4El : DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteableComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteableComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
    messageEl = fixture.debugElement.query(By.css('#message'));
    
    ch1El =  fixture.debugElement.query(By.css('#ch1'));
    ch2El =  fixture.debugElement.query(By.css('#ch2'));
    ch3El =  fixture.debugElement.query(By.css('#ch3'));
    ch4El =  fixture.debugElement.query(By.css('#ch4'));

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show message after init' , () => {
    console.log(messageEl)
    expect(messageEl).toBeNull();
  });

  it('should show message after clicking all checkboxes' , () => {
    console.log(ch1El)
    ch1El.nativeElement.click();
    
    ch2El.nativeElement.click();
    
    ch3El.nativeElement.click();
    
    ch4El.nativeElement.click();
    
    fixture.detectChanges();

    messageEl = fixture.debugElement.query(By.css('#message'));

    expect(messageEl).toBeDefined();
    expect(messageEl.nativeElement).toBeDefined();
    expect(messageEl.nativeElement.textContent).toEqual(" Mensaje!! ");
  });

  it('should not show message after clicking cbx 1, 2 and 3' , () => {
    console.log(ch1El)
    ch1El.nativeElement.click();
    
    ch2El.nativeElement.click();
    
    ch3El.nativeElement.click();
    
    
    fixture.detectChanges();

    messageEl = fixture.debugElement.query(By.css('#message'));

    expect(messageEl).toBeNull();
  });


  it('should not show message after clicking cbx 1, 2 and 4' , () => {
    console.log(ch1El)
    ch1El.nativeElement.click();
    
    ch2El.nativeElement.click();
    
    ch4El.nativeElement.click();
    
    
    fixture.detectChanges();

    messageEl = fixture.debugElement.query(By.css('#message'));

    expect(messageEl).toBeNull();
  });

});
