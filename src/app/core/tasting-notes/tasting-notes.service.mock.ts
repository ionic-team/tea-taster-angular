import { EMPTY } from 'rxjs';
import { TastingNotesService } from './tasting-notes.service';

export function createTastingNotesServiceMock() {
  return jasmine.createSpyObj<TastingNotesService>('TastingNotesService', {
    getAll: EMPTY,
    delete: EMPTY,
    save: EMPTY,
  });
}
