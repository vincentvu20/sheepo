import { _modal } from './index';

class ModalPortalServiceBase {
  private _ref = _modal as any;

  show = (body: React.ReactNode) => {
    if (this._ref.current && typeof this._ref.current?.show === 'function') {
      this._ref.current.show(body);
      return;
    }
    throw 'Modal Portal unavailable';
  };

  dismiss = () => {
    if (this._ref.current && typeof this._ref.current?.dismiss === 'function') {
      this._ref.current.dismiss();
      return;
    }
    throw 'Modal Portal unavailable';
  };
}

export const ModalPortalService = new ModalPortalServiceBase();
