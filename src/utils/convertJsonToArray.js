/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/**
 * convertJsonToArray - function to convert json object to any[]
 * @param {object} obj Input object
 * @return {any[]}
 */
export default function convertJsonToArray(obj) {
    return Object.keys(obj).map(item => obj[item]);
}