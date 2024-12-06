import { nanoid } from 'nanoid';
import Url from '../models/urls.model.js';
import { asyncHandler } from '../utilities/asyncHandler.js';
import { ApiError } from '../utilities/ApiError.js';
import { ApiResponse } from '../utilities/ApiResponse.js';

export const shortenURL = asyncHandler( async(req, res) => {
    const { longUrl } = req.body;

    if(!longUrl) {
        throw new ApiError(400, "enter URL before proceeding")
    }
    
    let url = await Url.findOne({ where: { longUrl } });
    if(!url) {
        const shortUrl = nanoid(8);
        url = await Url.create({
            shortUrl,
            longUrl
        })
    } else {
        return res.status(409).json(
            new ApiResponse(409, {shortUrl: url.shortUrl, longUrl: longUrl}, "URL already shortened")
        );    
    }

    return res.status(200).json(
        new ApiResponse(200, {shortUrl: url.shortUrl, longUrl: longUrl}, "URL shortened successfully")
    )
} )