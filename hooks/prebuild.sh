#!/bin/bash
echo "Generating .npmrc before install step..."
envsubst < .npmrc.template > /workspace/.npmrc
