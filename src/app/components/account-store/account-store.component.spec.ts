import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStoreComponent } from './account-store.component';

describe('AccountStoreComponent', () => {
  let component: AccountStoreComponent;
  let fixture: ComponentFixture<AccountStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
