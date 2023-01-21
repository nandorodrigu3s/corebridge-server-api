import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { catchError, firstValueFrom, lastValueFrom, map, Observable } from 'rxjs';

interface AppXRequestHttpParams<T> {
  params?: T,
  data?: T,
  config?: AxiosRequestConfig
}

@Injectable()
export class AppXRequestHttp {
  private url: string;
  private path: string;
  constructor(private readonly httpService: HttpService) {
    this.httpService = new HttpService();
  }

  //axios is facing some erros with "accept-encoding: br"
  //this is why we are setting AE here
  buildHeader() {

    // 'X-API-KEY': process.env.OPENSEA_API_KEY,
    const headers = {
      'Accept-Encoding': 'gzip,deflate,compress',
    };
    return headers;
  }

  buildParams<T>(paramsBuilder: AppXRequestHttpParams<T>) {
    const headers = this.buildHeader();
    return {
      headers,
      ...paramsBuilder
    };
  }

  setBaseUrl(url: string) {
    this.url = url;
  }

  setPath(path: string) {
    this.path = `${path.replace('/', '')}`;
    return this;
  }

  async appXGet<R, T = void>(
    params?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    try {
      const mergeParams = {
        order_direction: 'desc',
        offset: 0,
        limit: 10,
        include_orders: false,
        ...params,
      };
      const data = await lastValueFrom(
        this.httpService
          .get<R>(
            this.url + this.path,
            this.buildParams<T>({params: mergeParams, config})
          )
          .pipe(
            catchError((error: AxiosError) => {
              throw 'An error happened!';
            }),
          ),
      );
      return data?.data;
    } catch (error) {
      throw 'Ops! parece que algo deu errado';
    }
  }

  appXPost<T, R>(
    data?: T,
    config?: AxiosRequestConfig,
  ): Observable<AxiosResponse<R>> {
    return this.httpService
      .post(
        this.url + this.path,
        this.buildParams<T>({data, config})
      )
      .pipe(map((response) => response.data));
  }

}
