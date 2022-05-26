/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-05-26 09:12:02
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-05-26 09:14:58
 * @FilePath: \study-js\第 11 章\自定义封装Promise\promise.class.js
 * @Description:
 */

class Promise {
  // 构造函数
  constructor(executor) {
    // 添加属性
    this.PromiseState = "pending";
    this.PromiseResult = undefined;

    // 保存回调
    this.callbacks = [];

    // 保存实例对象的 this
    const self = this;

    // 声明 resolve 和 reject 两个函数参数
    function resolve(data) {
      // 如果状态不是 pending 则不执行函数
      if (self.PromiseState !== "pending") return;

      // 1. 修改 Promise 对象的状态
      self.PromiseState = "fulfilled";

      // 2. 返回结果值
      self.PromiseResult = data;

      // 调用 onResolved
      setTimeout(() => {
        self.callbacks.forEach((item) => {
          item.onResolved(data);
        });
      });
    }

    function reject(data) {
      // 如果状态不是 pending 则不执行函数
      if (self.PromiseState !== "pending") return;

      // 1. 修改 Promise 对象的状态
      self.PromiseState = "rejected";

      // 2. 返回结果值
      self.PromiseResult = data;

      // 调用 onRejected
      setTimeout(() => {
        self.callbacks.forEach((item) => {
          item.onRejected(data);
        });
      });
    }

    // 同步调用执行器函数
    try {
      executor(resolve, reject);
    } catch (e) {
      // 捕获异常，修改状态
      reject(e);
    }
  }

  // 给 Promise 添加 then() 方法
  then(onResolved, onRejected) {
    // 保存 this 指针
    const self = this;

    // 判断是否传递了失败回调
    if (typeof onRejected !== "function") {
      onRejected = (reason) => {
        throw reason;
      };
    }

    // 判断是否传递了成功回调
    if (typeof onResolved !== "function") {
      onResolved = (value) => {
        return value;
      };
    }

    return new Promise((resolve, reject) => {
      function callback(type) {
        try {
          // 获取函数执行结果
          const result = type(self.PromiseResult);
          if (result instanceof Promise) {
            // 执行结果是 Promise 实例时
            result.then(
              (v) => {
                resolve(v);
              },
              (r) => {
                reject(r);
              }
            );
          } else {
            // 不是 Promise 实例时
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      }
      // 调用回调函数
      if (this.PromiseState === "fulfilled") {
        setTimeout(() => {
          callback(onResolved);
        });
      }

      if (this.PromiseState === "rejected") {
        setTimeout(() => {
          callback(onRejected);
        });
      }

      if (this.PromiseState === "pending") {
        this.callbacks.push({
          onResolved: function () {
            callback(onResolved);
          },
          onRejected: function () {
            callback(onRejected);
          },
        });
      }
    });
  }

  // 给 Promise 添加 catch() 方法
  catch(onRejected) {
    return this.then(null, onRejected);
  }

  // 添加 Promise.resolve 方法
  static resolve(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(
          (v) => {
            resolve(v);
          },
          (r) => {
            reject(r);
          }
        );
      } else {
        resolve(value);
      }
    });
  }

  // 添加 Promise.reject 方法
  static reject(value) {
    return new Promise((resolve, reject) => {
      reject(value);
    });
  }

  // 添加 Promise.all 方法
  static all(promises) {
    return new Promise((resolve, reject) => {
      let count = 0;
      const results = [];
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (v) => {
            count++;
            results[i] = v;
            if (count === promises.length) {
              resolve(results);
            }
          },
          (r) => {
            reject(r);
          }
        );
      }
    });
  }

  // 添加 Promise.race 方法
  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (v) => {
            resolve(v);
          },
          (r) => {
            reject(r);
          }
        );
      }
    });
  }
}
