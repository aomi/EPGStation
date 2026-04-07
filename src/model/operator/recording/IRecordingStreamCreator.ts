import * as http from 'http';
import * as mapid from '../../../../node_modules/mirakurun/api';
import Reserve from '../../../db/entities/Reserve';

interface IRecordingStreamCreator {
    setTuner(tuners: mapid.TunerDevice[]): void;
    create(reserve: Reserve, abortSignal: AbortSignal): Promise<http.IncomingMessage>;
    changeEndAt(reserve: Reserve): void;
}

export default IRecordingStreamCreator;
