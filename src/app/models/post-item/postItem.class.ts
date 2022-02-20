interface IPostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export class PostItem implements IPostItem {
  public userId: number;
  public id: number;
  public title: string;
  public body: string;

  constructor(obj?: any) {
    if (obj !== undefined && obj !== null) {
      Object.assign(this, obj);
    }
  }
}
