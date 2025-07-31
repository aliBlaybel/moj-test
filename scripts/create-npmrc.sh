#!/bin/sh
echo "Generating .npmrc from .npmrc.template..."
envsubst < .npmrc.template > .npmrc
