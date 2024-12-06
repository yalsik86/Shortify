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
    
    const existingUrl = await Url.findOne({ where: { longUrl } });
    if(existingUrl) {
        return res.status(409).json(
            new ApiResponse(409, {shortUrl: existingUrl.shortUrl, longUrl: longUrl}, "URL recently shortened")
        )
    }

    const shortUrl = nanoid(8);
    const url = await Url.create({
        shortUrl,
        longUrl
    })

    return res.status(200).json(
        new ApiResponse(200, {shortUrl: shortUrl, longUrl: longUrl}, "URL shortened successfully")
    )
} )

export const resolveURL = asyncHandler(async (req, res) => {
    const { shortUrl } = req.params;

    const url = await Url.findOne({ where: { shortUrl } });
    if (!url) {
        throw new ApiError(404, "shortened URL not found");
    }

    url.clicks += 1;
    await url.save();

    return res.status(200).json(
        new ApiResponse(200, { longUrl: url.longUrl }, "URL resolved successfully")
    )
});

export const getAnalytics = asyncHandler(async (req, res) => {
    const { shortUrl } = req.params;

    const url = await Url.findOne({ where: { shortUrl } });

    if (!url) {
        throw new ApiError(404, "Short URL not found.");
    }

    return res.status(200).json(
        new ApiResponse(200, { shortUrl: url.shortUrl, longUrl: url.longUrl, clicks: url.clicks }, "URL analytics retrieved successfully.")
    );
});