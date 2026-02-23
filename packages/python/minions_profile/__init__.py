"""
Minions Profile Python SDK

Your source of truth — verified bio claims, portfolio items, and rate cards
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Profile.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
