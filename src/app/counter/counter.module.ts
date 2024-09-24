import { NgModule } from "@angular/core";
import { CounterComponet } from "./components/counter/counter.component";

@NgModule({
  declarations:[
    CounterComponet
  ],
  exports:[
    CounterComponet
  ]
})
export class CounterModule{

}
