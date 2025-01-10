<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Solve;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreSolveRequest;
use App\Http\Requests\UpdateSolveRequest;
use Illuminate\Support\Facades\Log;

class SolveController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Timer/Index', [
            'profilePhotoUrl' => (auth()->user()->profile_photo_path) ? Storage::url(auth()->user()->profile_photo_path) : null
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSolveRequest $request)
    {
        // try {
        //     $data = $request->validated();
        //     Solve::create($data);
        //     return response()->json(['message' => 'Solve recorded successfully'], 201);
        // } catch (\Exception $e) {
        //     Log::error("Store solve error", $e, $request->all());
        // }
        return $request->all();
    }

    /**
     * Display the specified resource.
     */
    public function show(Solve $solve)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Solve $solve)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSolveRequest $request, Solve $solve)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Solve $solve)
    {
        //
    }
}
